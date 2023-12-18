import './Main.css';
import {data} from './QuoteData'
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