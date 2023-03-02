export const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2
        }
    }
}

export const item = {
    hidden: { y: '100%', opacity: 0 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}
export const itemBtn = {
    hidden: { y: '100%' },
    show: {
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}

export const navChildren = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: 'easeInOut'
        }
    }
}