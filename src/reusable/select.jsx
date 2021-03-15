import React, {useState, useRef} from 'react';
import classNames from 'classnames';
import useOutsideClick from './clickOutside';

const Select = (props) => {
    const {
        onAction,
        modifiers,
        type,
        className,
        options,
    } = props;

    const ref = useRef();

    const [isMenuShown, showHideMenu] = useState(false);

    const selectedOption = options.find((option) => modifiers[option.stateLabel]) || options[0];

    const classname = classNames(
        'select-header',
        `select-header-${selectedOption.backgroundColor}`,
        {
            [`select-header-${selectedOption.backgroundColor}-opened`]: isMenuShown
        }
    )

    useOutsideClick(ref, () => isMenuShown && showHideMenu(false))

    const renderSelect = () => {
        switch(type) {
            case 'multiselect':
                return (
                    <div className={'select-wrapper select-wrapper--' + className}>
                        <button
                            onClick={() => showHideMenu(!isMenuShown)}
                            className={classname}
                        >{selectedOption.selectedName}</button>
                        {isMenuShown && (
                            <div className='options' ref={ref}>
                                {options.map((option, idx) => (
                                    <div className={'option option--' + option.backgroundColor}
                                        key={idx}
                                        onClick={() => onAction(option.stateLabel) || showHideMenu(false)}
                                    >{option.optionName}</div>
                                ))}
                            </div>
                        )}
                    </div>
                )
            case 'select':
                return (
                    <div className={'select-wrapper select-wrapper--' + className}>
                        <button
                            onClick={() => showHideMenu(!isMenuShown)}
                            className={classname}
                        >{selectedOption.selectedName}</button>
                        {isMenuShown && (
                            <div className='options' ref={ref}>
                                {options.map((option, idx) => (
                                    <div className={'option option--' + option.backgroundColor}
                                        key={idx}
                                        onClick={() => onAction(option.stateLabel) || showHideMenu(false)}
                                    >{option.optionName}</div>
                                ))}
                            </div>
                        )}
                    </div>
                )
            case 'menu':
                return (
                    <div className={'select-wrapper select-wrapper--' + className}>
                        <button
                            onClick={() => showHideMenu(!isMenuShown)}
                            className={classname}
                        >:</button>
                        {isMenuShown && (
                        <div className='options' ref={ref}>
                            {options.map((option, idx) => (
                                <div className={'option option--' + option.backgroundColor}
                                    key={idx}
                                    onClick={() => onAction(option.action) || showHideMenu(false)}
                                >{option.optionName}</div>
                            ))}
                        </div>)
                        }
                    </div>
                )
            default:
                return <div>not found</div>
        }
    };

    return renderSelect()
}

export default Select;