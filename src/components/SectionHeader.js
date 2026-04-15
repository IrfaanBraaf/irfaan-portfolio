import React from "react";
import Styles from "../Styles";

const SectionHeader = ({ title }) => {
    return (
        <div style={Styles.sectionHeader}>
            {title}
        </div>
    );
};

export default SectionHeader;