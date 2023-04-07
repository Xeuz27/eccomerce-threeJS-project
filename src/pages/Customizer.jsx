import React, {useState, useEffect} from 'react'
import {AnimatePresence, animatePresence, motion} from 'framer-motion'
import {useSnapshot} from 'valtio'

import config from '../config/config'
import state from '../store'
import {download} from '../assets'
import {downloadCanvasToImage, reader} from '../config/helpers'
import {fillerTabs, DecalTypes, EditorTabs} from '../config/constants'
import {fadeAnimation, slideAnimation} from '../config/motion'
import {ColorPicker, FilePicker, CustomButton, Tab, AIPicker} from '../components'
const Customizer = () => {
  const snap = useSnapshot(state)
  return (
    <AnimatePresence>
      {!snap.intro && (
        <>
        <motion.div
        key="custom"
        className='absolute top- left-0 '
        {...slideAnimation('left')}
        >
          <div className="flex items-center-min-h-screen">
            <div className="editorTabs-container tabs">
              {EditorTabs.map((tab) => (
                <Tab
                key={tab.name}
                tab={tab}
                handleClick={ () => {} }
                />
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div className='absolute z-10 top-5 right-5'
        {...fadeAnimation}>
          <CustomButton 
            type={filled}
            title="go back"
            handleClick={ () => state.intro = true }
            customStyles='w-fit px-5 py-2.5 font-bold text-sm'
          />

        </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Customizer