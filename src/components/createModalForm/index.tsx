import './styles/main.scss';
import Header from './components/header';
import Footer from "./components/footer";
import Button from "./components/button";
import {useState} from "react";
import Modal from "./components/modal";

function App() {
    const [addNote, setAddNote] = useState<boolean>(false);

    const toggleAddModal = () => setAddNote(!addNote);

    return (
        <div className="App">
            <Header/>

            <main>
                <div className="container">
                    <Button
                        title={"Add new Note"}
                        loading={false}
                        onClick={toggleAddModal}
                    />
                    <hr/>
                    <p>Notes to see</p>
                </div>
            </main>

            {
                addNote
                &&
                <Modal/>
            }
            <Footer/>
        </div>
    );
}

export default App;
