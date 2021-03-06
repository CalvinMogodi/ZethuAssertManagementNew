SELECT *
INTO #Temp From (
SELECT  ROW_NUMBER() OVER(ORDER BY VENUS_CODE) AS num, PROPDESC As 'Name',VENUS_CODE AS 'ClientCode',[ZONING] as 'Zoning',
		[Street_No]+' '+[Physical_Addr] AS 'StreetAddress',[TOWNSHIP] as 'Suburb',
		[REGION] as 'Region',[1] as 'LocalMunicipality',[Owner_Name] as 'OwnerInfomation',
		[Register_No] as 'TitleDeedNumber',[LONGITUDE] as 'Longitude',[LATITUDE] as 'Latitude'--,[USER/ASSESOR] AS 'ASSESOR'
  FROM [TheProject].[dbo].[I$]) as X
  ALTER TABLE #TEMP ADD GPSCoordinatesId INT
  ALTER TABLE #TEMP ADD DeedsId INT
  ALTER TABLE #TEMP ADD LocationId INT
  ALTER TABLE #TEMP ADD UserId INT
  
  C:\Program Files\Microsoft SQL Server\MSSQL12.MSSQLSERVER\MSSQL\Backup\

  --Delete from Facilities
  --Delete from DeedsInfoes
  --Delete from Locations
  --Delete from GPSCoordinates
  --Delete from Buildings
  --select *  FROM [TheProject].[dbo].[I$]
  	select * from Facilities
	where ClientCode='X01000000001590000000000000'
  --select * FROM #Temp
  BEGIN
      declare @TotalCount int 
	  declare @Counter int
	  SET @Counter = 1
	  SET @TotalCount = (SELECT COUNT(*) FROM #Temp)

	  WHILE (@Counter <=@TotalCount)
		BEGIN
			Insert into GPSCoordinates(Longitude,Latitude)
			select Longitude,Latitude
			FROM #TEMP where num=@Counter
			
			UPDATE #TEMP
			SET GPSCoordinatesId = IDENT_CURRENT('GPSCoordinates')
			WHERE num=@Counter

			Insert into Locations(StreetAddress,Suburb,LocalMunicipality,Province,Region,GPSCoordinates_Id)
			select  StreetAddress,Suburb,LocalMunicipality,'Gauteng',Region,GPSCoordinatesId
			FROM #TEMP where num=@Counter
			
			UPDATE #TEMP
			SET LocationId = IDENT_CURRENT('Locations')
			WHERE num=@Counter
			-------------------------------------------------------------------------------------------------
			Insert into DeedsInfoes(ErFNumber,TitleDeedNumber,OwnerInfomation,Extent)
			select null,TitleDeedNumber,OwnerInfomation,0
			FROM #TEMP where num=@Counter

			UPDATE #TEMP
			SET DeedsId = IDENT_CURRENT('DeedsInfoes')
			WHERE num=@Counter

			--UPDATE #TEMP
			--SET UserId = (Select Id from Users where Username= #TEMP.Assesor)
			--WHERE num=@Counter
			

			Insert Into Facilities(Name,ClientCode,Zoning,CreatedDate,ModifiedDate,CreatedUserId,Location_Id,DeedsInfo_Id,[Status])--,[User_Id])
			SELECT  Name,ClientCode,Zoning,GETDATE(),GETDATE(),0,LocationId,DeedsId,'New'--,UserId
			FROM #TEMP where num=@Counter

		  SET @Counter = @Counter + 1
		  CONTINUE;
		END
	End
	DROP TABLE #TEMP


