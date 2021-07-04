import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import NavigationIcon from '@material-ui/icons/Navigation';
import Tooltip from '@material-ui/core/Tooltip';
import './QuickIntro.css';

const QuickIntro = () => {
    return(<div>
        <article className="main-article">
            <h5>Hello, welcome to the personal website of</h5>
            <h2>Prashanth Mandya Jayaramu</h2>
            <h3>Staff Software Engineer</h3>
            <h5>Currently working at <a href="https://geaviation.com" target="_blank" rel="noreferrer" class="ge-aviation">GE Aviation</a></h5>
        </article>
        <section class="mian-section">
            <Tooltip title="github">
                <a href="https://github.com/prashanth000mj" aria-label="github" target="_blank" rel="noreferrer">
                    <GitHubIcon fontSize='large' className="social-icon"/>
                </a>
            </Tooltip>
            <Tooltip title="linkedin">
                <a href="https://www.linkedin.com/in/prashanth000mj/" aria-label="linkedin" target="_blank" rel="noreferrer">
                    <LinkedInIcon fontSize='large' className="social-icon"/>
                </a>
            </Tooltip>
            <Tooltip title="email">
                <a href="mailto://prashanth000mj@gmail.com" aria-label="email">
                    <EmailIcon fontSize='large' className="social-icon"/>
                </a>
            </Tooltip>
            <Tooltip title="resume">
                <a href="mailto:prashanth000mj@gmail.com" aria-label="resume">
                    <InsertDriveFileIcon fontSize='large' className="social-icon"/>
                </a>
            </Tooltip>
            <Tooltip title="know more">
                <NavigationIcon fontSize='large' className="social-icon"/>
            </Tooltip>
        </section>
    </div>);
};

export default QuickIntro;