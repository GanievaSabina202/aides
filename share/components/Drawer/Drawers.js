import style from './Drawer.module.scss';
import { useState } from 'react';
import { Drawer, Button, Group } from '@mantine/core';
import SosialN from '../SosialN';


const Drawers = () => {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                padding="xl"
                size="xl"
                position="right"
            >
                <div className={style.Wrapper}>

                    <div className={style.Wrap}>

                        <img width='176' height='120'
                            src='https://kenozoik.qodeinteractive.com/wp-content/uploads/2018/06/logo-sidearea-2.png' />

                        <p className={style.paragraph}>Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei. Mei an pericula euripidis, hinc partem ei est. Eos ei nisl graecis, vix aperiri consequat an.</p>

                        <SosialN />

                    </div>

                </div>
            </Drawer>

            <Group position="center" className={style.drawerlg}>
                <Button className={style.OpenBtn} onClick={() => setOpened(true)}>
                    <span className={style.OpenBtnIcons}>
                        <span className={style.BtnIcon}></span>
                        <span className={style.BtnIcon}></span>
                        <span className={style.BtnIcon}></span>

                        <span className={style.BtnIcon}></span>
                        <span className={style.BtnIcon}></span>
                        <span className={style.BtnIcon}></span>

                        <span className={style.BtnIcon}></span>
                        <span className={style.BtnIcon}></span>
                        <span className={style.BtnIcon}></span>
                    </span>

                </Button>
            </Group>
        </>
    );
}
export default Drawers
