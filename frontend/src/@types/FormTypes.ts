
export type inputField ={
    variant: "outlined" | "filled" | 'standard',
    type: string,
    label: string,
    required: boolean,
    sxProps: any,
    // value: any,
    onChange: ((e: any) => void)
}