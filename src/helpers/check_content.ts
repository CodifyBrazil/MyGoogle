type Content = {
    title_conteudo: string,
    body_conteudo: string
}

export const check_content = (data: Content) :boolean =>{
    return (data.title_conteudo !== undefined && data.body_conteudo) ? true : false;
}