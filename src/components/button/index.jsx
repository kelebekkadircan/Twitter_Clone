import PropTypes from 'prop-types'
import { createElement } from 'react'
import classNames from 'classnames'



export default function Button({ size, children }) {
    return createElement('button', {
        className: classNames("bg-[#1d9bf0] rounded-full flex font-bold items-center justify-center hover:bg-[#1a8cd] transition-colors ", {
            "px-4 h-9": size === "normal",
            "px-4 h-[52px] w-full text-[17px]": size === "large"
        })
    }, children)
}

Button.propTypes = {
    children: PropTypes.element,
    size: PropTypes.oneOf(["normal", "large"])
}

Button.defaultProps = {
    size: "normal"
}