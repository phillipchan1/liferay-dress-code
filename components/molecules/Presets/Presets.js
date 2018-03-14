import React from 'react'
import ModalSelector from 'react-native-modal-selector'
import { Button, TextInput } from 'react-native'

const Presets = props => {
    let index = 0

    const presets = [
        { key: index++, label: 'The Weston Spéciale', wardrobe: { tops: 0, bottoms: 0, shoes: 0 } },
        { key: index++, label: 'The Bchan Bootleg', wardrobe: { tops: 1, bottoms: 1, shoes: 1 } },
        { key: index++, label: 'The Phillipe Sway', wardrobe: { tops: 2, bottoms: 2, shoes: 2 } },
    ]

    return (
        <ModalSelector
            data={presets}
            initValue="Presets"
            accessible={true}
            onChange={props.handlePresetChange}
        >
            <Button style={{ color: 'white' }} title="Presets" onPress={() => console.log()}>
                Presets
            </Button>
        </ModalSelector>
    )
}

export default Presets
