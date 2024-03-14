import { BarChart } from '@mui/x-charts';


export default function BmrChart() {



    return (
        <div>
            <BarChart
                xAxis={[
                    {
                    id: 'barCategories',
                    data: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
                    scaleType: 'band',
                    },
                ]}
                series={[
                    { data: [3, 4, 1, 6, 5, 10, 3], stack: 'A'},
                    { data: [4, 3, 1, 5, 8, 7, 7], stack: 'A'},
                    
                  ]}
                width={390}
                height={300}
            />
        </div>
    )
}