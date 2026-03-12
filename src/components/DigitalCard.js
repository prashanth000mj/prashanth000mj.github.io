import React, { useState } from 'react';
import {
    GitHub,
    LinkedIn,
    Email,
    Description,
    Language,
    Instagram,
    PersonAdd,
    Phone,
    Share
} from '@material-ui/icons';
import './DigitalCard.css';

const XIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z" />
    </svg>
);

const trackEvent = (action, category, label) => {
    if (window.gtag) {
        window.gtag('event', action, {
            'event_category': category,
            'event_label': label
        });
    }
};

const DigitalCard = () => {
    const [showQR, setShowQR] = useState(false);

    const profileData = {
        name: "Prashanth Mandya Jayaramu",
        role: "Principal Software Engineer",
        company: "Cloud Software Group",
        bio: "Building scalable distributed systems and modern web experiences.",
        avatar: "/profile192.png", // Using the existing profile image
        links: [
            {
                title: "GitHub",
                url: "https://github.com/prashanth000mj",
                icon: <GitHub />,
                color: "#333"
            },
            {
                title: "LinkedIn",
                url: "https://www.linkedin.com/in/prashanth000mj/",
                icon: <LinkedIn />,
                color: "#0077b5"
            },
            {
                title: "Portfolio",
                url: "https://prashanth000mj.github.io",
                icon: <Language />,
                color: "#4a90e2"
            },
            {
                title: "Resume",
                url: "mailto:prashanth000mj@gmail.com", // Keeping existing resume behavior for now
                icon: <Description />,
                color: "#e67e22"
            }
        ],
        socials: [
            { icon: <Email />, url: "mailto:prashanth000mj@gmail.com", label: "Email" },
            { icon: <Phone />, url: "tel:+919738270642", label: "Phone" },
            {
                icon: <Share />,
                onClick: () => setShowQR(!showQR),
                label: "Share",
                active: showQR
            },
            { icon: <XIcon />, url: "https://x.com/prashanth000mj", label: "X" },
            { icon: <Instagram />, url: "https://instagram.com/prashanth000mj", label: "Instagram" }
        ]
    };

    return (
        <div className="card-container">
            <div className="glass-card">
                <div className="profile-section">
                    <div className="avatar-wrapper">
                        <img src={profileData.avatar} alt={profileData.name} className="avatar" />
                    </div>
                    <h1 className="name">{profileData.name}</h1>
                    <p className="role">{profileData.role} @ <span className="company">{profileData.company}</span></p>
                    <p className="bio">{profileData.bio}</p>

                    <div className="action-bar single-btn">
                        <a
                            href="/prashanth000mj.vcf"
                            download="prashanth000mj.vcf"
                            className="save-contact-btn"
                            onClick={() => trackEvent('download_vcf', 'engagement', 'Save Contact')}
                        >
                            <PersonAdd className="btn-icon" />
                            Save Contact
                        </a>
                    </div>

                    <div className={`qr-reveal ${showQR ? 'active' : ''}`}>
                        <div className="qr-container">
                            <img src="/qrcode.png" alt="QR Code" className="qr-image" />
                            <p className="qr-text">Scan to Connect</p>
                        </div>
                    </div>
                </div>

                <div className="links-section">
                    {profileData.links.map((link, index) => (
                        <a
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-button"
                            style={{ '--hover-color': link.color }}
                            onClick={() => trackEvent('click_link', 'outbound', link.title)}
                        >
                            <span className="link-icon">{link.icon}</span>
                            <span className="link-title">{link.title}</span>
                        </a>
                    ))}
                </div>

                <div className="social-footer">
                    {profileData.socials.map((social, index) => (
                        social.onClick ? (
                            <button
                                key={index}
                                onClick={() => {
                                    social.onClick();
                                    trackEvent('toggle_qr', 'engagement', 'Share');
                                }}
                                aria-label={social.label}
                                className={`social-link btn-reset ${social.active ? 'active' : ''}`}
                            >
                                {social.icon}
                            </button>
                        ) : (
                            <a
                                key={index}
                                href={social.url}
                                aria-label={social.label}
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => trackEvent('click_social', 'outbound', social.label)}
                            >
                                {social.icon}
                            </a>
                        )
                    ))}
                </div>
            </div>

            <div className="background-glow"></div>
        </div>
    );
};

export default DigitalCard;
