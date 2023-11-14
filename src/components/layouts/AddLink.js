import styles from './Navbar.module.css'
import { useState } from 'react';


import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton';

function AddLink({ proucuarLink, btnText, linkData }) {
    
    const [link, setLink] = useState(linkData || {})

    const submit = (e) => {
        e.preventDefault()
        proucuarLink(link)
        
       //console.log(link.name)
    }
    function handleOnChange(e) {
        setLink({ ...link, [e.target.name]: e.target.value })
        //console.log(link)
    }
    return (
        <div className={styles.content}>
            <div className={styles.titulo}>
                <h1>YouTube Downloader</h1>
                <p>Faça aqui o download dos seus vídeos e músicas!</p>
                <p>Gratuitamente!</p>
            </div>
            <form onSubmit = { submit }>
                <h2>Pesquisar vídeo</h2>
                <Input type="text"
                    text="Link do video"
                    name="link_video"
                    placeholder="Insira o link..."
                    handleOnChange={handleOnChange}
                />
                <SubmitButton text={btnText}
                />
            </form>
        </div>
    )
}

export default AddLink;