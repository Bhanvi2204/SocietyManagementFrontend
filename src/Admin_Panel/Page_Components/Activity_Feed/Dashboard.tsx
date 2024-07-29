import PieChart from './DashboardPieChart'
import student from '../../../assets/student.jpg'
import { formatDistanceToNow } from 'date-fns'
import { ChevronRight } from 'lucide-react'
import Sidebar from '../Sidebar/Sidebar'

const statsData = [
    {
        field: 'Total Registered Socities',
        count: 15
    },
    {
        field: 'Total Registered Members',
        count: 715
    },
    {
        field: 'Events this month',
        count: 5
    },
]

const activityData = [
    {
        img: student,
        date: new Date(),
        author: 'Adam Smith',
        title: ' New opening treasurer posted by Society D'
    },
    {
        img: student,
        date: new Date(),
        author: 'Dr. Achall Kaushik',
        title: ' Coordinator Mr. X assigned to tech fest event'
    },
    {
        img: student,
        date: new Date(),
        author: 'Adam Smith',
        title: ' New opening treasurer posted by Society D'
    },
    {
        img: student,
        date: new Date(),
        author: 'Adam Smith',
        title: ' New opening treasurer posted by Society D'
    },
    {
        img: student,
        date: new Date(),
        author: 'Adam Smith',
        title: ' New opening treasurer posted by Society D'
    },
]

const filteredActivityData = activityData.length > 3 ? activityData.slice(0, 3) : activityData

const Dashboard = () => {
    return (
        <div className="flex gap-5 justify-start mx-6">
            <Sidebar/>
            
        <div>
            
            <div className="flex flex-col lg:flex-row lg:justify-around mt-10 lg:space-x-4  space-y-4 text-center mx-2">
                {
                    statsData.map((dataField, index) => (
                        <div key={index} className="bg-gray-200 px-2 lg:px-4 py-8 rounded-lg">
                            <h3 className="text-4xl font-bold">{dataField.count}</h3>
                            <h5 className="text-gray-700">{dataField.field}</h5>
                        </div>
                    ))
                }
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-around mt-10 lg:space-x-4  space-y-4 mx-2 lg:mx-0">
                <div className=''>
                    <h2 className='font-bold text-2xl mb-8 text-center'>Activity Feed</h2>
                    <div className='border border-md brder-gray-800 rounded px-4 py-2 '>
                        {
                            filteredActivityData.map((activity, index) => (
                                <div key={index} className='flex flex-col lg:flex-row space-x-4 mb-6'>
                                    <div>
                                        <img
                                            src={activity.img}
                                            className='rounded-full h-20'
                                        />
                                    </div>
                                    <div>
                                        <div className='flex flex-col pt-4'>
                                            <h5 className='text-gray-700 text-sm'>{formatDistanceToNow(activity.date)} ago / {activity.author}</h5>
                                            <div className='flex justify-between'>
                                                <h3>{activity.title}</h3>
                                                <ChevronRight className='ml-6' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        <p className='text-blue-600'>See more activities</p>
                    </div>
                </div>
                <div>
                    <h2 className='font-bold text-2xl mb-8 text-center'>Query Resolution</h2>
                    <PieChart />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Dashboard