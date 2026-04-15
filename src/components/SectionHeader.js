import React from "react";
import Styles from "../Styles";

const SectionHeader = ({ title }) => {
    return (
        <div style={Styles.sectionHeader} className="section-header">
            {title}
        </div>
    );
};

export default SectionHeader;