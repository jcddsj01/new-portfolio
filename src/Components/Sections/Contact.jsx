import { useI18n } from "../../i18n";
import { useState } from 'react'
import { Send } from 'lucide-react'

function Contact() {
    const { translate } = useI18n();
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const sendMessage = (event) => {
        event.preventDefault();

        const phoneNumber = "5547984655836";
        const fullMessage = `Olá, tudo bem? Me chamo ${name} e sou recrutador(a).\n${message}`;
        const encodeMessage = encodeURIComponent(fullMessage);
        const URL = `https://wa.me/${phoneNumber}?text=${encodeMessage}`;

        window.open(URL, '_blank');

        setName('');
        setMessage('');
    };

    return (
        <section className="mb-[150px]" id="whatsappContactForm">
            <div className='mb-15 mx-[30px]'>
                <h1 className='uppercase rounded-[2px_2px_2px_30px] font-bold text-gray-50 p-4 bg-gradient-to-r from-orange-600 text-lg to-neutral-800 shadow-[0_2px_5px_rgba(0,0,0,0.3)]'>
                    {translate("contact.title")}
                </h1>
                <p className='text-lg p-5 mt-8 leading-7 bg-gradient-to-r from-black/30 to-[#252628]/30 rounded-[2px_2px_2px_30px] shadow-[0_2px_5px_rgba(0,0,0,0.9)]'>
                {translate("contact.content")}
                </p>
            </div>

            <div className='flex justify-center mt-12 mx-full sm:mx-[30px]'>
                <div className="bg-gradient-to-r from-black/30 to-[#252628]/30 rounded-[2px_2px_2px_30px] max-w-[520px] w-full mx-auto shadow-[0_2px_5px_rgba(0,0,0,0.9)] flex flex-col justify-center">
                    <header className="bg-gradient-to-r from-orange-600 text-lg to-neutral-800 text-gray-50 font-bold uppercase rounded-[2px_2px_0_0] text-center p-[15px_0]">{translate("contact.form-title")}</header>

                    <form onSubmit={sendMessage}>
                        <div className="m-5">
                            <label className='flex text-orange-600 mb-[10px] font-bold uppercase' htmlFor="name">{translate("contact.label-name")} *</label>
                            <input id="name"
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                            className='w-full p-2 rounded-[2px] border-none font-sm text-xl resize-y bg-gray-50 text-black placeholder:text-black placeholder:text-lg focus:outline-0 focus:border-orange-600 focus:shadow-[0_0_5px_5px_rgba(255,68,0,0.3)]' placeholder={translate("contact.input-placeholder-name")} required/>
                        </div>

                        <div className="m-5">
                            <label className='flex text-orange-600 mb-[10px] font-bold uppercase' htmlFor="message">{translate("contact.label-message")} *</label>
                            <textarea id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className='w-full p-2 rounded-[2px] border-none font-sm text-xl resize-y bg-gray-50 text-black placeholder:text-black placeholder:text-lg focus:outline-0 focus:border-orange-600 focus:shadow-[0_0_5px_5px_rgba(255,68,0,0.3)]' rows={4} placeholder={translate("contact.input-placeholder-message")}
                            required></textarea>
                        </div>
                        
                        <div className="flex justify-center items-center">
                            <button type="submit" className="inline-flex items-center w-full justify-center gap-3 font-semibold uppercase bg-gradient-to-r from-orange-600 text-base to-neutral-800 text-gray-50 cursor-pointer py-3 px-5 mb-7 mx-[20px] rounded-[2px_2px_2px_30px] shadow-[0_2px_5px_rgba(0,0,0,0.3)] hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-600 hover:shadow-[0_0_20px_rgba(255,68,0,0.3)] transition-all duration-200">
                            {translate("contact.button-send")}
                            <Send  className='w-5 h-5 flex-shrink-0' />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;
