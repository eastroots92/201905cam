import sampleintLessThan from './sampleintLessThan'

const createRGBcode = () => (
    `rgb(${sampleintLessThan(256)}, ${sampleintLessThan(256)}, ${sampleintLessThan(256)})`
)

export default createRGBcode

