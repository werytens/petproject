import React from 'react';

import {format, compareAsc, formatDistance, subDays, formatRelative} from "date-fns";
import {ru} from 'date-fns/locale'

const formatData = format(new Date(2004, 10, 6), "d MMMM yyyy");
const yearsFromMyBirthday = formatDistance(formatData, new Date(), {addSuffix: true, locale: ru});
const relativeDays = formatRelative(subDays(new Date(), 0), new Date(), {locale: ru});

const dates = [
    new Date(1995, 6, 2),
    new Date(1987, 1, 11),
    new Date(1989, 6, 10),
];
dates.sort(compareAsc);

const Dates: React.FC<{ display?: boolean }> = ({display = false}) => {
    return (
        <div className=' text-[white] bg-black p-2 rounded' style={{display: display ? 'block' : 'none'}}>
            {formatData}, {' '}{yearsFromMyBirthday}
            <br/>
            <br/>
            {relativeDays}
            <br/>
            <br/>
            <ul>
                {
                    dates.map((item, index) => <li key={index}>
                        {String(format(item, 'd MMMM yyyy'))}
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Dates;