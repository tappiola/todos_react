import React from "react";
import './HamburgerButton.css';

export const HamburgerButton = ({menuOpen, onButtonClick}) => {
    return <
        button type="button" aria-label="Main menu" role="switch" aria-checked="true"
               className="left_menu_toggle top_bar_btn" onClick={onButtonClick}>
        <svg viewBox="0 0 24 24" className={`close_icon ${menuOpen ? '' : 'icon-hidden'}`} width="24" height="24">
            <path fill="currentColor" fillRule="nonzero"
                  d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"></path>
        </svg>
        <svg className={`menu_icon ${menuOpen ? 'icon-hidden' : ''}`} width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" fillRule="evenodd"
                  d="M4.5 5h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1zm0 6h15a.5.5 0 1 1 0 1h-15a.5.5 0 1 1 0-1z"></path>
        </svg>
    </button>
}
