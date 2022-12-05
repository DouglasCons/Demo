import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';
import { useState } from 'react';

export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        "Muito interessante o seu post!!! Parabéns", 
        "Eu não gostei. achei uma bosta!"
    ]);

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true,
    });

    function handleCreateNewComment() {
        event.preventDefault()

        setComments([...comments, newCommentText]);

        setNewCommentText('');
    };

    function handleNewCommentChange() {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Esse campo é obrigatório. Por favor, preencha antes de continuar.');
    }

    function deleteComment(commentToDelete) {
        const commentWithoutDeleteOne = comments.filter(comment => {
            return comment != commentToDelete;
        })

        setComments(commentWithoutDeleteOne);
    }

    const isNewCommentEmpty = newCommentText.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author} >
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo} >
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time 
                    title={publishedDateFormatted} 
                    dataTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
        
           </header>

            <div className={styles.content} >

                {content.map(qualquernome => {
                    if (qualquernome.type === 'paragraph') {
                        return <p>{qualquernome.content}</p>;
                    } else if (qualquernome.type === 'link') {
                        return <p><a href='#'>{qualquernome.content}</a></p>;
                    }
                })}
                <p>{new Date().toLocaleDateString()}</p>
                <p>{new Date().toLocaleTimeString()}</p>
                <p>{new Date().toLocaleString()}</p>
                <p> <a href="">Jane.design/doctorcare</a> </p>
                <p> 
                    <a href="">#novoprojeto</a> {' '} 
                    <a href="">#rockteseat</a> {' '}
                    <a href="">#nlw</a> 
                </p>
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe o seu comentário</strong>
                <textarea 
                    name="comment" 
                    placeholder='Deixe o seu comentário'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentEmpty}>
                        Publicar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment 
                            key={comment} 
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    
                    )
                })}
            </div>

        </article>    
    )
};