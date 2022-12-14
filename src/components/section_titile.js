import React, { Component } from 'react';
import '../assets/section_title.css';
class SectionTitle extends Component {
	render() {
		return (
			<div className='ms-2 mb-2'>
				<h2 className='section-title text-dark m-0'>
					{this.props.sectionTitle}
				</h2>
				<span className='text-secondary meta-title'>
					{this.props.metaData}
				</span>
			</div>
		);
	}
}

export default SectionTitle;
