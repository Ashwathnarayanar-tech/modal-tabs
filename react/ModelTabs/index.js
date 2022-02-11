import React, { Component } from 'react'
import Tabs from "./Tablist/Tabs";
import styles from './model.css';
require("../../assets/tabImages/jellybean-370zcoupe.png");


export class ModelTabs extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className={styles.modelTabWrapper}>
        <Tabs>
          {this.props.modelData.map((child, i) => {
            const type = child.contentType;
            return (
              <div key={i} label={child.label} className={styles.type}>
                <div className={styles.tabContentContainer}>
                  <div className={styles.carModelContainer}>
                    <ul className={styles.modelRange}>
                      {child.content.map((contents, j) => {
                        return (
                          <li key={j} className={styles.modelList}>
                            <a href={contents.url} className={styles.modelAnchor}>
                              <img className={styles.carImage} src={contents.img} alt={contents.modelName} />
                              <h4 className={styles.modelTitle}>{contents.modelName}</h4>
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </Tabs>
      </div>
    );
  }
}

export default ModelTabs
