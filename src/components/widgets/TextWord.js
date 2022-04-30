import styles from './widget_style.module.scss'
import {useSelector} from 'react-redux'

import TEXT_SECTION_BORDER_RADIUS from './PrepareTextSection'


const TextWord = ({seperatorHover, textClick, item, bgColor, sortablePassage}) => {
    const textDivisions = useSelector((state) => state.textDivisions.value)

    const getRoundedSectionBorders = () => {
        let leftB = "0"
        let rightB = "0"
        for (let i in textDivisions) {
          // Must increment the beginning index since it is non-inclusive to the left
          const beginIndex = sortablePassage.findIndex(wordObj => wordObj.id == textDivisions[i].beginKey) + 1
          if (item.id === sortablePassage[beginIndex].id) {
            leftB = TEXT_SECTION_BORDER_RADIUS
          }
          if (item.id === textDivisions[i].endKey) {
            rightB = TEXT_SECTION_BORDER_RADIUS
          }
        }
        return `${leftB} ${rightB} ${rightB} ${leftB}`
      }

    return (
        <span className={`${styles.textSections} noDrag`}
            onMouseEnter={() => seperatorHover(item.id)}
            onClick={() => textClick(item.id)}
            style={{
              backgroundColor: bgColor,
              borderRadius:getRoundedSectionBorders()
            }}>
            {item.text}
          </span>
    )
}

export default TextWord;

