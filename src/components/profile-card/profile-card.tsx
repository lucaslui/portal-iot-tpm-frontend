import Image from 'next/image';

import styles from './profile-card.module.scss';

import userLogo from '../../assets/imgs/user.svg'
import { ArticleViewModel } from '@/model/article';

type Props = {
    article: ArticleViewModel
    logoWidth?: number
    logoHeight?: number
}

const ProfileCard: React.FC<Props> = ({ article, logoWidth, logoHeight }: Props) => {
    return (
        <section className={styles.profile_card}>
            <div className={styles.image_container}>
                <Image src={article.user.imageUrl ? article.user.imageUrl : userLogo} alt='Imagem do Perfil' width={logoWidth ? logoWidth : 30} height={logoHeight ? logoHeight : 30} />
            </div>
            <div className={styles.info}>
                <h3> {article.user.name} </h3>
                <p> {article.user.occupation} </p>
            </div>
        </section>
    )
}

export default ProfileCard