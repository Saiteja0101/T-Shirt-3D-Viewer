import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { useSnapshot } from 'valtio';
import state from '../store';
import { CustomButton } from '../components';

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion';

const Homepage = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence className='flex-col'>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.div
            className='home-content'
            {...headContainerAnimation}
          >
            <motion.div
              {...headTextAnimation}
            >
              <h1
                className="head-text text-xl">
                LET'S <br className='xl:block hidden' />
                DO IT.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className='flex flex-col gap-5'
            >
              <p className="max-w-md font-normal text-gray-600 text-base">
                Create your unique and exclusive shirt with our
                brand new 3D customization tool.
                <strong> Unleash your imagination</strong>
                {' '} and define your own style.
              </p>

              <CustomButton
                type="filled"
                title="Customized It"
                handleClick={() => state.intro = false}
                customStyles='w-fit px-4 py-2.5 font-bold text-sm border-2 border-black mb-10'
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Homepage