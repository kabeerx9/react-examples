import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useState } from 'react';
import { Input } from './ui/input';

import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import Papa from 'papaparse';
import { Button } from './ui/button';

interface ITimeTable {
  standard: string;
  division: string;
  slots: {
    day: number;
    hour: number;
    subject: string;
    teacher: string;
  }[];
}

interface IClashedTeacher {
  standard: string;
  division: string;
  clashes: {
    day: number;
    hour: number;
    teacher: string;
  }[];
}

const TimeTableGenerator = () => {
  const [fileSelected, setFileSelected] = useState(false);
  const [schoolData, setSchoolData] = useState<
    {
      standard: string;
      subject: string;
      teacher: string;
      periods_per_week: string;
    }[]
  >([]);

  const handleInputFileChange = (event) => {
    setFileSelected(event.target.files.length > 0);
    const file = event.target.files[0];
    Papa.parse(file, {
      complete: handleDataParsing,
      header: true, // The csv file has a header row
      dynamicTyping: false,
      skipEmptyLines: true,
    });
  };

  const handleDataParsing = (result) => {
    setSchoolData([...result.data]);
  };

  const handleGenerateTimetable = () => {
    console.log('Generating timetable');
    setFileSelected(false);
    mutate();
  };

  const { data, isPending, mutate } = useMutation({
    mutationFn: async () => {
      const res = await axios.post(
        'http://127.0.0.1:8000/api/create-timetable/',
        {
          school_id: 3,
          timetable_data: schoolData.map((data) => ({
            ...data,
            standard: Number(data.standard),
            periods_per_week: Number(data.periods_per_week),
          })),
        },
      );
      return res.data;
    },
  });
  console.log('Generate Timetable data is', data);

  console.log('school data is ', schoolData);

  return (
    <div>
      <div className="text-center text-4xl font-semibold text-[#5777BA] my-5">
        Time Table Generator{' '}
      </div>
      <div className="flex justify-between">
        <Input
          className="bg-green-200 w-50"
          type="file"
          accept=".csv"
          onChange={handleInputFileChange}
        />
        {fileSelected && (
          <Button onClick={handleGenerateTimetable}>
            {isPending ? 'Generating...' : 'Generate Timetable'}
          </Button>
        )}
      </div>

      {fileSelected && (
        <div className="px-10 mt-10">
          <Table>
            <TableCaption>School Data from CSV</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center bg-gray-200 text-black">
                  Standard
                </TableHead>
                <TableHead className="text-center bg-gray-200 text-black">
                  Subject
                </TableHead>
                <TableHead className="text-center bg-gray-200 text-black">
                  Teacher
                </TableHead>
                <TableHead className="text-center bg-gray-200 text-black">
                  Periods per week{' '}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schoolData.map((data, ind) => (
                <TableRow key={ind}>
                  <TableCell className="text-center">{data.standard}</TableCell>
                  <TableCell className="text-center">{data.subject}</TableCell>
                  <TableCell className="text-center">{data.teacher}</TableCell>
                  <TableCell className="text-center">
                    {data.periods_per_week}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
      {data && (
        <div>
          {data.timetable.map((timetable: ITimeTable, index: number) => (
            <TimeTableTable
              key={index}
              standard={timetable.standard}
              division={timetable.division}
              slots={timetable.slots}
            />
          ))}
        </div>
      )}
      {data && (
        <div className="text-3xl text-[#5777BA] text-semibold text-center">
          Clashed Timetable
        </div>
      )}
      {data && (
        <div className="mb-20">
          {data.clashed_teachers.map((clash: IClashedTeacher, i: number) => (
            <div className="bg-gray-100 my-4 " key={i}>
              <div className="text-xl font-semibold text-center">
                {clash.standard} - {clash.division}
              </div>
              <div className="flex flex-col gap-4 border-2 border-black ">
                {clash.clashes.map((singleClash, ind) => (
                  <div className="flex justify-around" key={ind}>
                    <span>Day : {singleClash.day}</span>
                    <span>Hour : {singleClash.hour}</span>
                    <span>Name : {singleClash.teacher}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeTableGenerator;

const TimeTableTable = ({
  standard,
  division,
  slots,
}: {
  standard: string;
  division: string;
  slots: {
    day: number;
    hour: number;
    subject: string;
    teacher: string;
  }[];
}) => {
  const days = [0, 1, 2, 3, 4];

  return (
    <div>
      <div className="flex justify-center items-center">
        <span className=" p-2 my-5 text-2xl font-semibold text-center border-2 border-black bg-black text-white rounded-lg">
          {standard} - {division}
        </span>
      </div>
      <Table>
        <TableCaption>
          Time Table for {standard}-{division}{' '}
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center bg-gray-200 text-black">
              1st Period
            </TableHead>
            <TableHead className="text-center bg-gray-200 text-black">
              2nd Period
            </TableHead>
            <TableHead className="text-center bg-gray-200 text-black">
              3rd Period
            </TableHead>
            <TableHead className="text-center bg-gray-200 text-black">
              4th Period
            </TableHead>
            <TableHead className="text-center bg-gray-200 text-black">
              Recess
            </TableHead>
            <TableHead className="text-center bg-gray-200 text-black">
              5th Period
            </TableHead>
            <TableHead className="text-center bg-gray-200 text-black">
              6th Period
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {days.map((day, i) => (
            <TableRow key={i}>
              {slots
                .sort((a, b) => {
                  if (a.day === b.day) {
                    // If the days are the same, sort by hour
                    return a.hour - b.hour;
                  } else {
                    // If the days are different, sort by day
                    return a.day - b.day;
                  }
                })
                .map((slot) => {
                  if (slot.day === day) {
                    if (slot.hour === 3) {
                      return (
                        <>
                          <TableCell className="text-center">
                            <span className="font-semibold">
                              {slot.subject} -{' '}
                            </span>
                            {slot.teacher} {/* {slot.hour} */}
                          </TableCell>
                          <TableCell className="text-center">Lunch</TableCell>
                        </>
                      );
                    }

                    return (
                      <TableCell className="text-center">
                        <span className="font-semibold">{slot.subject} - </span>
                        {slot.teacher} {/* {slot.hour} */}
                      </TableCell>
                    );
                  }
                  return null;
                })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="h-2 w-full bg-gray-800 my-10"></div>
    </div>
  );
};
