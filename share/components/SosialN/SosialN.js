import Link from 'next/link';
import { HrerC } from './SosialN.styled'

const SosialN = ({ color }) => {

    return (
        <div>
            <Link passHref href="https://www.linkedin.com">
                <HrerC color={color} target="_blank">Ln.</HrerC>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <HrerC color={color} target="_blank">Fb.</HrerC>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <HrerC color={color} target="_blank">Tw.</HrerC>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <HrerC color={color} target="_blank">Be.</HrerC>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <HrerC color={color} target="_blank">Db.</HrerC>
            </Link>
            <Link passHref href="https://www.linkedin.com">
                <HrerC color={color} target="_blank">Li.</HrerC>
            </Link>
        </div>
    );
};

export default SosialN;