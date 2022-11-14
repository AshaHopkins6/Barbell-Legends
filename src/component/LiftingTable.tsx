import React, { MouseEventHandler, useCallback, useState } from "react";
import { boolean } from "yup";
import data from "../Data/cleanedData.json";
import Table from 'react-bootstrap/Table';

type Data = typeof data
    type SortKeys = keyof Data[0]
    type SortOrder = 'ascn' | 'desc'

    function sortData({tableData, sortKey, reverse}:{
        tableData: Data;
        sortKey: SortKeys;
        reverse: boolean;
    }){
        if(!sortKey) return tableData

        const sortedData = data.sort((a,b) =>{
            return a[sortKey] > b[sortKey] ? 1: -1
        })

        if(reverse){
            return sortedData.reverse()
        }
        return tableData;
    }

    function SortButton({
        sortOrder,
        columnKey,
        sortKey,
        onClick,
      }: {
        sortOrder: SortOrder;
        columnKey: SortKeys;
        sortKey: SortKeys;
        onClick: MouseEventHandler<HTMLButtonElement>;
      }) {
        return (
          <button
            onClick={onClick}
            className={`${
              sortKey === columnKey && sortOrder === "desc"
                ? "sort-button sort-reverse"
                : "sort-button"
            }`}
          >
            ▲
          </button>
        );
      }
    

export default function LiftingTable({ data }:{data: Data}){
    const [sortKey, setSortKey] = useState<SortKeys> ("Name")
    const[sortOrder, setSortOrder] = useState<SortOrder> ("ascn")

    const headers: { key: SortKeys; label: string }[] = [
        { key: "Name", label: "Name" },
        { key: "Sex", label: "Sex" },
        { key: "Event", label: "Event" },
        { key: "Equipment", label: "Equipment" },
        //{ key: "Age", label: "Age" },
        { key: "AgeClass", label: "Age Class" },
        { key: "Division", label: "Division" },
        //{ key: "BodyweightKg", label: "Bodyweight" },
        { key: "WeightClassKg", label: "Weight Class" },
        //{ key: "Squat1kg", label: "Squat 1" },
        //{ key: "Squat2kg", label: "Squat 2" },
        //{ key: "Squat3kg", label: "Squat 3" },
        //{ key: "Squat4kg", label: "Squat 4" },
        { key: "Best3SquatKg", label: "Squat" },
        //{ key: "Bench1Kg", label: "Bench 1" },
       // { key: "Bench2Kg", label: "Bench 2" },
        //{ key: "Bench3Kg", label: "Bench 3" },
        //{ key: "Bench4Kg", label: "Bench 4" },
        { key: "Best3BenchKg", label: "Bench" },
        //{ key: "Deadlift1Kg", label: "Deadlift 1" },
        //{ key: "Deadlift2Kg", label: "Deadlift 2" },
        //{ key: "Deadlift3Kg", label: "Deadlift 3" },
        //{ key: "Deadlift4Kg", label: "Deadlift 4" },
        { key: "Best3DeadliftKg", label: "Deadlift" },
        { key: "TotalKg", label: "Total" },
        { key: "Place", label: "Place" },
        { key: "Wilks", label: "Wilks" },
        { key: "McCulloch", label: "McCulloch" },
        { key: "Glossbrenner", label: "Glossbrenner" },
        { key: "IPFPoints", label: "IPF Points" },
        { key: "Tested", label: "Tested" },
        { key: "Country", label: "Country" },
        { key: "Federation", label: "Federation" },
        { key: "Date", label: "Date" },
        { key: "MeetCountry", label: "Meet Country" },
        { key: "MeetState", label: "Meet State" },
        { key: "MeetName", label: "Meet Name" },
        
        
    ]

    const sortedData = useCallback(
        () =>sortData({tableData: data, sortKey, reverse: sortOrder === 'desc'}), 
        [data, sortKey, sortOrder] 
        );

    function changeSort(key: SortKeys) {
        setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");
    
        setSortKey(key);
        }
    return (
        <Table responsive >
            <thead>
                <tr>
                    {headers.map((row) =>{
                        return <td width="170" key={row.key}>{row.label}
                        
                        <SortButton
                            columnKey={row.key}
                            onClick={() => changeSort(row.key)}
                            {...{
                                sortOrder,
                                sortKey,
                            }}
                        />
                        </td>;
                    })}
                </tr>
            </thead>
            <tbody>
                {sortedData().map((person)=>{
                    return(
                        <tr key ={person.Name}>
                            <td>{person.Name}</td>
                            <td>{person.Sex}</td>
                            <td>{person.Event}</td>
                            <td>{person.Equipment}</td>

                           
                            <td>{person.AgeClass}</td>
                            <td>{person.Division}</td>

                           
                            <td>{person.WeightClassKg}</td>

                           
                            <td>{person.Best3SquatKg}</td>

                            
                            <td>{person.Best3BenchKg}</td>

                           
                            <td>{person.Best3DeadliftKg}</td>

                            <td>{person.TotalKg}</td>
                            <td>{person.Place}</td>

                            <td>{person.Wilks}</td>
                            <td>{person.McCulloch}</td>
                            <td>{person.Glossbrenner}</td>
                            <td>{person.IPFPoints}</td>

                            <td>{person.Tested}</td>
                            <td>{person.Country}</td>
                            <td>{person.Federation}</td>
                            <td>{person.Date}</td>

                            <td>{person.MeetCountry}</td>
                            <td>{person.MeetState}</td>
                            <td>{person.MeetName}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    )
}


