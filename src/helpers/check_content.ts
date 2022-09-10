type Content = {
    title_conteudo: string,
    description: string,
    body_conteudo: string
}

export const check_content = (data: Content) :boolean =>{
    return (data.title_conteudo && data.description && data.body_conteudo) ? true : false;
}