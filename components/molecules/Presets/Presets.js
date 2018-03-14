import React from 'react'
import ModalSelector from 'react-native-modal-selector'
import { Button, TextInput } from 'react-native'

const Presets = props => {
    let index = 0

    const presets = [
        {
            key: index++,
            label: 'The Weston Spéciale',
            wardrobe: { tops: 14, bottoms: 4, shoes: 15 },
        },
        { key: index++, label: 'The Bchan Bootleg', wardrobe: { tops: 13, bottoms: 9, shoes: 4 } },
        { key: index++, label: 'The Phillipe Sway', wardrobe: { tops: 9, bottoms: 10, shoes: 2 } },
    ]

    return (
        <ModalSelector
            data={presets}
            initValue="Presets"
            accessible={true}
            onChange={props.handlePresetChange}
        >
            <Button color="white" style={{ color: 'white' }} title="Presets" onPress={() => console.log()}>
                Presets
            </Button>
        </ModalSelector>
    )
}

export default Presets
