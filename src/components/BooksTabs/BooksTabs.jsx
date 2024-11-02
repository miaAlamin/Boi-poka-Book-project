import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addToDB';
import SingleBook from '../singleBook/SingleBook';

const BooksTabs = () => {
    const [readList, SetReadList] = useState([]);

    const bookdata = useLoaderData();

    useEffect(()=>{
        const storedReadList = getStoredReadList();
        const storedReadListInte = storedReadList.map(id => parseInt(id));

        const redbookLIst = bookdata.filter(book => storedReadListInte.includes(book.bookId))

        SetReadList(redbookLIst);
    } ,[])

    return (
        <div>
            <h1 className='text-2xl mb-4'>all tabs:{}</h1>

             <Tabs>
                <TabList>
                <Tab>Read as Marks list</Tab>
                <Tab>whis List</Tab>
                </TabList>

                <TabPanel>
                <h2>Book i Read :{readList.length}</h2>
                {
                    readList.map(book=> <SingleBook key={book.bookId} book={book}></SingleBook>)
                }
                </TabPanel>
                <TabPanel>
                <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
            
        </div>
    );
};

export default BooksTabs;