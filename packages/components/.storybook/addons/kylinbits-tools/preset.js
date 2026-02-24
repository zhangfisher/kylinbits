import { fileURLToPath } from 'url'

export default {
    name: 'kylinbits-tools',
    managerEntries: (entry = []) => {
        return [...entry, fileURLToPath(new URL('./manager.js', import.meta.url))]
    },
}
