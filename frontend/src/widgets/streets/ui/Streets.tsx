import "./Streets.css";
import SectionTitle from "@/shared/ui/SectionTitle";
import GenreTags from "./internal/GenreTags";
import { getStreetList } from '@/widgets/streets/api/getStreetList'
import { getDisciplines } from '@/widgets/streets/api/getDisciplines'

const Streets = async () => {
    const [streetDes, disciplines] = await Promise.all([
        getStreetList(),
        getDisciplines()
    ]);

    return (
        <section className="streets section-spacing-top" id="about">
            <div className="streets__container container">
                <div className="streets__content">
                    <SectionTitle>улицы</SectionTitle>
                    <div className="streets__description">
                        <p className="streets__paragraph">
                          {streetDes.text}
                        </p>
                    </div>
                </div>
                <GenreTags genres={disciplines}/>
            </div>
        </section>
    )
}

export default Streets;
