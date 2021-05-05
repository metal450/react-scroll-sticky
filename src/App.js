import { Link } from 'react-scroll';

function App() {

    const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7'];
    const container = "scrollContainer";

    return (
        <main className="flex absolute right-0 bottom-0 left-0 top-0">

            <div id={container} className="md:flex-row flex flex-col overflow-auto border border-box" style={{ flexBasis: "65%", flex: 2}}>

                <div className="md:w-64 p-3 border sticky top-0 flex-shrink-0 bg-white border-box">
                    {items.map((item) => <div className="cursor-pointer m-2 underline" key={item}><Link to={item} smooth={true} duration={500} spy={true} containerId={container}>{item}</Link></div>)}
                </div>

                <div style={{ flex: 1 }}>
                    {items.map((item) => <div key={item} id={item} className="h-64 border m-2 bg-gray-100" >{item}</div>)}
                </div>

            </div>

        </main>
    );
}

export default App;
