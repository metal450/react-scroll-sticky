import { Link } from 'react-scroll';

function App() {

    const items = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
    const container = "scrollContainer";

    return (
        <main>

            <div className="flex md:flex-row flex-col absolute right-0 bottom-0 left-0 top-0">
                <div id={container} className="flex xl:flex-row flex-col overflow-auto border border-box max-w-6xl" style={{ flexBasis: "65%", flex: 2}}>

                    <div className="p-3 border sticky top-0 flex-shrink-0 bg-white border-box xl:w-64">
                        {items.map((item) => <div className="cursor-pointer m-2 underline" key={item}><Link to={item} smooth={true} duration={500} spy={true} containerId={container}>{item}</Link></div>)}
                    </div>

                    <div style={{ flex: 1 }}>
                        {items.map((item) => <div key={item} id={item} className="h-64 border m-2 bg-gray-100" >{item}</div>)}
                    </div>

                </div>

                <div className="p-0 border overflow-hidden border-box bg-blue-100" style={{ flexBasis: "35%", flex: 1 }}>
                    Fixed Panel
                </div>

            </div>
        </main>
    );
}

export default App;
