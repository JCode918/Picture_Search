import React from 'react'

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 10 }
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);  // 10 comes from the grid-auto-row set in the ImageList.css. Also Round the amount up by using Ceiling
        this.setState({ spans: spans })
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img ref={this.imageRef} alt={description} src={urls.regular} />
            </div>
        );
    }
}

export default ImageCard;