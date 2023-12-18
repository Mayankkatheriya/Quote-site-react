import './Main.css';
import data from './QuoteData.json'
import Quote from './Quote'

const Main = () => {
    return (
        <main>
            {
                data.map((obj, index) => {
                    return <Quote key={index} quoteObj={obj} />;
                })
            }
        </main>
    )
}

export default Main