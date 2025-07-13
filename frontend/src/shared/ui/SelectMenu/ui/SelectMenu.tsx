'use client'
import './SelectMenu.css'
import Icon from '@/shared/icon'
import { useSelectMenu } from '../model'
import type { SelectMenuProps } from '../model/type'
import useClickOutside from '@/shared/hooks/useClickOutside'
import { useRef } from 'react'

const SelectMenu = ({ options, onChange, searchable = false, placeholder, value }: SelectMenuProps) => {
  const { isOpen, search, setSearch, filteredOptions, longestOption, toggleOpen } = useSelectMenu(options, searchable)

  const menuRef = useRef<HTMLDivElement>(null)

  const getSelectedLabel = () =>
    options.find(opt => opt.id === value)?.name || placeholder || ''

  const onOptionClick = (id: string) => {
    if (id === value) {
      onChange?.(undefined)
    } else {
      onChange?.(id)
    }
    toggleOpen()
  }

  useClickOutside(menuRef, () => isOpen && toggleOpen())

  return (
    <div className={`select-menu ${isOpen ? 'open' : ''}`} ref={menuRef}>
      <div className="select-menu__width-helper select-none">{longestOption}</div>
      <div className="select-menu__selected" onClick={toggleOpen}>
        <span className="select-menu__selected-text">{getSelectedLabel()}</span>
        <Icon icon="chevron" width={20} height={20} className={isOpen ? 'bottom' : ''} />
      </div>

      {isOpen && (
        <ul className="select-menu__list">
          {searchable && (
            <li className="select-search">
              <Icon icon="search" width={24} height={24} />
              <input
                type="text"
                placeholder="Поиск"
                value={search}
                onChange={e => setSearch(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && filteredOptions.length > 0) {
                    onOptionClick(filteredOptions[0].id)
                  }
                }}
              />

            </li>
          )}

          {filteredOptions.map(data => {
            const isSelected = data.id === value

            return (
              <li
                key={data.id}
                className={`select-menu__item ${isSelected ? 'select-menu__item--selected' : ''}`}
                onClick={() => onOptionClick(data.id)}
              >
                <span>{data.name}</span>
                {isSelected && <Icon icon="check" width={16} height={12} />}
              </li>
            )
          })}

          {filteredOptions.length === 0 && (
            <li className="select-menu__empty">Ничего не найдено</li>
          )}
        </ul>
      )}

    </div>
  )
}

export default SelectMenu
