import Image from 'next/image';

import styles from './profile-date-card.module.scss';

import userLogo from '../../assets/imgs/user.svg'
import { ArticleViewModel } from '@/model/article';
import { getShortStringDateFormat } from '@/utils/date';

type Props = {
    article: ArticleViewModel
}

const ProfileDateCard: React.FC<Props> = ({ article }: Props) => {
    return (
        <section className={styles.profile_date_card}>
            <div className={styles.image_container}>
                <Image
                    src={article.user.imageUrl ? article.user.imageUrl : userLogo}
                    alt='Imagem do Perfil'
                    width={30}
                    height={30}
                />
            </div>
            <div className={styles.info}>
                <label> {article.user.name} </label>
                <time> {`${getShortStringDateFormat(article.createdAt)} • ${article.readTime} min de leitura`}</time>
            </div>
        </section>
    )
}

export default ProfileDateCard