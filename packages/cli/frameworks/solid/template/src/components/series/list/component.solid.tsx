import { Component, createSignal } from 'solid-js';

import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { ListSerieController } from './controller';

export const ListSerieComponent: Component = () => {
  const [store, setStore] = createSignal<ListSerieController>(new ListSerieController({}), { equals: false });
  const ctrl = new ListSerieController({
    hooks: {
      doRender: () => {
        setStore({ ...ctrl } as ListSerieController);
      },
    },
  });
  setStore(ctrl);

  return (
    <div>
      <h2>List</h2>
      <div>
        <button
          className="primary"
          id="add"
          type="button"
          onClick={() => {
            ctrl.add();
          }}
        >
          Add
        </button>
        {store().showPerformanceButton && (
          <button
            className="secondary"
            id="start"
            type="button"
            onClick={() => {
              ctrl.onStart();
            }}
          >
            Performance
          </button>
        )}
      </div>
      {store().elements.map(() => {
        return (
          <table>
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Unit</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {ctrl.measuredSeries.map((serie: MeasuredSerieModel, index: number) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{serie.getId()}</td>
                    <td>{serie.getTitle()}</td>
                    <td>{serie.getUnit()}</td>
                    <td>
                      <button
                        id={`edit-${index}`}
                        type="button"
                        onClick={() => {
                          ctrl.edit(serie);
                          setStore(ctrl);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
      })}
      <small>Duration: {store().duration} ms</small>
    </div>
  );
};
