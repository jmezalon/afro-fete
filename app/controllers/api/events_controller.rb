class Api::EventsController < ApplicationController
    before_action :find_event, only: [:show, :update, :destroy]
    before_action :current_user, only: :create
    skip_before_action :authorize, only: [:index, :show]

    def index
        render json: Event.all, status: :ok
    end

    def show 
        render json: @event, status: :ok
    end

    def create
        render json: @current_user.events.create!(event_params), status: :created
    end

    def update  
        render json: @event.update(event_params), status: :accepted
    end

    def destroy 
        @event.destroy 
        head :no_content
    end

    private 

    def event_params
        params.permit(:img_url, :venue_name, :address, :city, :state, :zip, :date, :description)
    end

    def find_event
        @event = Event.find(params[:id])
    end
end
