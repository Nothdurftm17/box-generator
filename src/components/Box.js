import React, { Component } from 'react';
import { useState } from 'react'

const Box = (props) => {

    return (
        <div>
            <h2 style={{width:60,height:60,backgroundColor: props.name}}></h2>
        </div>
    )
}

export default Box