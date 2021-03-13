import React, {useState, useRef} from 'react';
import classNames from 'classnames';
import useOutsideClick from './clickOutside';

const Select = (props) => {
    const {
        selectHeader,
        onAction,
        backgroundColor,
        type,
        className,
        options,
    } = props;

    const ref = useRef()

    const [isMenuShown, showHideMenu] = useState(false);

    const classname = classNames(
        'select-header',
        `select-header-${backgroundColor}`,
        {
            [`select-header-${backgroundColor}-opened`]: isMenuShown
        }
    )

    useOutsideClick(ref, () => isMenuShown && showHideMenu(false))

    const renderSelect = () => {
        switch(type) {
            case 'multiselect':
                return options.map((option, idx) => (
                    <div className={'option option--' + option.backgroundColor}
                        key={idx}
                        onClick={() => onAction(option) || showHideMenu(false)}
                    >{option.optionName}</div>
                ));
            case 'select':
                return options.map((option, idx) => (
                    <div className={'option option--' + option.backgroundColor}
                        key={idx}
                        onClick={() => onAction(option) || showHideMenu(false)}
                    >{option.optionName}</div>
                ));
            case 'menu':
                return options.map((option, idx) => (
                    <div className={'option option--' + option.backgroundColor}
                        key={idx}
                        onClick={() => onAction(option.action) || showHideMenu(false)}
                    >{option.optionName}</div>
                ));
            default:
                return <div>not found</div>
        }
    };

    return (
        <div className={'select-wrapper select-wrapper--' + className}>
            <button
                onClick={() => showHideMenu(!isMenuShown)}
                className={classname}
            >{selectHeader}</button>
            {isMenuShown && <div className='options' ref={ref}>
                {renderSelect()}
            </div>}
        </div>
    )
    
}

export default Select;