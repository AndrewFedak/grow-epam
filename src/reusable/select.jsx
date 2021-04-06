import React, {useState, useRef} from 'react';
import classNames from 'classnames';
import useOutsideClick from './clickOutside';

const Select = (props) => {
    const {
        type,
        className,
        selectedOption,
        options,
        onAction,
        isGoalCollapsed
    } = props;

    const ref = useRef();

    const [isMenuShown, showHideMenu] = useState(false);

    useOutsideClick(ref, () => isMenuShown && showHideMenu(false))

    const renderSelect = () => {
        switch(type) {
            case 'multiselect':
                return (
                    <div className={'select-wrapper select-wrapper--' + className}>
                        <button
                            onClick={() => showHideMenu(!isMenuShown)}>
                        </button>
                        {isMenuShown && (
                            <div className='options' ref={ref}>
                                {options.map((option, idx) => (
                                    <div className={'option option--' + option.backgroundColor}
                                        key={idx}
                                        onClick={() => onAction(option.stateLabel) || showHideMenu(false)}
                                    >{option.name}</div>
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
                        >⋮</button>
                        {isMenuShown && (
                        <div className='options' ref={ref}>
                            {options.map((option, idx) => (
                                <div className='option'
                                    key={idx}
                                    onClick={() => onAction(option.action) || showHideMenu(false)}
                                >{option.name}</div>
                            ))}
                        </div>)
                        }
                    </div>
                )
            default:
                const classname = classNames(
                    'select-header',
                    {
                        [`select-header-${selectedOption.className}`]: selectedOption.className,
                        [`select-header-${selectedOption.className}-opened`]: selectedOption.className && (isMenuShown || !isGoalCollapsed) 
                    }
                )
                return (
                    <div className={'select-wrapper select-wrapper--' + className}>
                        <button
                            onClick={() => showHideMenu(!isMenuShown)}
                            className={classname}
                        >{selectedOption.name}</button>
                        {isMenuShown && (
                            <div className='options' ref={ref}>
                                {options.map((option, idx) => (
                                    <div className='option'
                                        key={idx}
                                        onClick={() => {
                                            onAction(option.stateLabel)
                                            showHideMenu(false)
                                        }}
                                    >{option.name}</div>
                                ))}
                            </div>
                        )}
                    </div>
                );
        }
    };

    return renderSelect()
}

export default Select;