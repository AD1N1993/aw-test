import React from "react";
import styles from './Container.module.scss'

type Props = {
    children: React.ReactNode;
};

const Container = ({children}: Props) => {
    return <div className={styles.wrapper}>{children}</div>;
};

export default Container;
