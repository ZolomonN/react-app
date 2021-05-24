import React from 'react';

export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.error && meta.touched;
    return (
        <div>
            <div>
                <textarea className={hasError ? 'error' : ''} {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
            
        </div>
    )
};

export const Input = ({input, meta, ...props}) => {
        const hasError = meta.error && meta.touched;
        return (
            <div>
                <div>
                    <input className={hasError ? 'error' : ''} {...input} {...props}/>
                </div>
                {hasError && <span>{meta.error}</span>}
                
            </div>
        )
    };