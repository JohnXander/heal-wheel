interface layerProps {
    layerContainer: string;
    mind: number;
    body: number;
    social: number;
    work: number;
}

export default function SecondLayer({ layerContainer, mind, body, social, work }: layerProps) {
    return (
        <div className='absolute w-64 h-64 lg:w-80 lg:h-80'>
            <div className={layerContainer}>
              <div
                className='w-32 h-32 lg:w-40 lg:h-40 absolute'
                style={mind > 3 ? { backgroundColor: "#76A9FA" } : { backgroundColor: "#E1EFFE" }}>
              </div>
              <div
                className='w-32 h-32 lg:w-40 lg:h-40 absolute right-0'
                style={body > 3 ? { backgroundColor: "#31C48D" } : { backgroundColor: "#DEF7EC" }}>
              </div>
              <div
                className='w-32 h-32 lg:w-40 lg:h-40 absolute bottom-0'
                style={social > 3 ? { backgroundColor: "#E3A008" } : { backgroundColor: "#FDF6B2" }}>
              </div>
              <div
                className='w-32 h-32 lg:w-40 lg:h-40 absolute bottom-0 right-0'
                style={work > 3 ? { backgroundColor: "#F98080" } : { backgroundColor: "#FDE8E8" }}>
              </div>
            </div>
        </div>
    )
}