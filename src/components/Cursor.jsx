import React from "react";
import AnimatedCursor from "react-animated-cursor"
const Cursor = () => {

    return (
        <AnimatedCursor
            innerSize={18}
            outerSize={10}
            color='193, 210, 255'
            outerAlpha={0.9}
            innerScale={0.7}
            outerScale={5}
            outerStyle={{
                mixBlendMode: 'exclusion'
            }}
            showSystemCursor={true}
            clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link'
            ]}
        />);

}

export default Cursor;