type MapLocation = {
    id: number,
    name: string,
    description: string,
    address: string,
    image: string,
    tags: string[],
    coord: {lat: number, lng: number}
}