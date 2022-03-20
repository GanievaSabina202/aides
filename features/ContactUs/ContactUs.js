import Input from "../../share/components/Input";
import AdressCard from "./components/AdressCard";
import Card from "./components/Card";
import GoogleMaps from "./components/Map";
import style from './ContactUs.module.scss';
const ContactUs = () => {
    const CountryName1 = "TOKYO"
    const CountryName2 = "NEW YORK"
    const CountryName3 = "STOCKHOLM"
    const CountryName4 = "PARIS"

    const MailAddress1 = "kenozoik@example.com"
    const MailAddress2 = "kenozoik@example.com"
    const MailAddress3 = "kenozoik@example.com"
    const MailAddress4 = "kenozoik@example.com"

    const PhoneNumber1 = "+(123) 456 -7890"
    const PhoneNumber2 = "+(123) 456 -7890"
    const PhoneNumber3 = "+(123) 456 -7890"
    const PhoneNumber4 = "+(123) 456 -7890"

    const Folder1 = "Download Resume"
    const Folder2 = "Download Resume"
    const Folder3 = "Download Resume"
    const Folder4 = "Download Resume"

    return (
        <div className={style.contactWrap}>
            <GoogleMaps />
            <div className={style.Wrapper}>
                <Input />
                <Card />
            </div>
            <div className={style.AddressWrap}>
                <AdressCard
                    CountryName={CountryName1}
                    MailAddress={MailAddress1}
                    PhoneNumber={PhoneNumber1}
                    Folder={Folder1}
                />
                <AdressCard
                    CountryName={CountryName2}
                    MailAddress={MailAddress2}
                    PhoneNumber={PhoneNumber2}
                    Folder={Folder2}
                />
                <AdressCard
                    CountryName={CountryName3}
                    MailAddress={MailAddress3}
                    PhoneNumber={PhoneNumber3}
                    Folder={Folder3}
                />
                <AdressCard
                    CountryName={CountryName4}
                    MailAddress={MailAddress4}
                    PhoneNumber={PhoneNumber4}
                    Folder={Folder4}
                />
            </div>
        </div>
    );
};

export default ContactUs;